import { TestBed } from '@angular/core/testing';

import { ClipboardService } from './clipboard.service';
import { TOAST_DURATION_MS, ToastService } from './toast.service';

function stubClipboard(writeText: ((text: string) => Promise<void>) | undefined): void {
  Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: writeText ? { writeText } : undefined,
  });
}

function stubExecCommand(impl: () => boolean): void {
  Object.defineProperty(document, 'execCommand', {
    configurable: true,
    writable: true,
    value: impl,
  });
}

describe('ClipboardService', () => {
  let service: ClipboardService;
  let toast: ToastService;

  beforeEach(() => {
    service = TestBed.inject(ClipboardService);
    toast = TestBed.inject(ToastService);
  });

  afterEach(() => {
    vi.useRealTimers();
    Reflect.deleteProperty(navigator, 'clipboard');
    Reflect.deleteProperty(document, 'execCommand');
  });

  it('writes to the async clipboard and shows the toast', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    stubClipboard(writeText);

    await service.copy('me@example.com', 'Email copied: me@example.com');

    expect(writeText).toHaveBeenCalledExactlyOnceWith('me@example.com');
    expect(toast.visible()).toBe(true);
    expect(toast.message()).toBe('Email copied: me@example.com');
  });

  it('falls back to execCommand when the clipboard API rejects', async () => {
    stubClipboard(vi.fn().mockRejectedValue(new Error('denied')));
    const execCommand = vi.fn().mockReturnValue(true);
    stubExecCommand(execCommand);

    await service.copy('me@example.com', 'copied');

    expect(execCommand).toHaveBeenCalledWith('copy');
    expect(toast.message()).toBe('copied');
    expect(document.querySelector('textarea')).toBeNull();
  });

  it('falls back to execCommand when there is no clipboard API', async () => {
    stubClipboard(undefined);
    const execCommand = vi.fn().mockReturnValue(true);
    stubExecCommand(execCommand);

    await service.copy('me@example.com', 'copied');

    expect(execCommand).toHaveBeenCalledWith('copy');
    expect(toast.message()).toBe('copied');
  });

  it('asks the visitor to copy manually when every method fails', async () => {
    stubClipboard(undefined);
    stubExecCommand(() => false);

    await service.copy('me@example.com', 'copied');

    expect(toast.message()).toBe('Failed to copy. Please copy manually: me@example.com');
  });

  it('hides the toast again after a few seconds', () => {
    vi.useFakeTimers();

    toast.show('hello');
    expect(toast.visible()).toBe(true);

    vi.advanceTimersByTime(TOAST_DURATION_MS - 1);
    expect(toast.visible()).toBe(true);
    vi.advanceTimersByTime(1);
    expect(toast.visible()).toBe(false);
  });
});
