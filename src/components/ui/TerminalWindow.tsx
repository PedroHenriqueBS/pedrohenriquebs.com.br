import type { ReactNode } from "react";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
}

export function TerminalWindow({ title, children }: TerminalWindowProps) {
  return (
    <div className='h-fit overflow-hidden rounded-2xl border border-accent/15 bg-surface font-mono text-[13px]'>
      <div className='flex items-center gap-1.5 border-b border-accent/10 bg-surface-alt px-4 py-3'>
        <span
          className='size-[11px] rounded-full bg-[#ff5f57]'
          aria-hidden='true'
        />
        <span
          className='size-[11px] rounded-full bg-[#febc2e]'
          aria-hidden='true'
        />
        <span
          className='size-[11px] rounded-full bg-[#28c840]'
          aria-hidden='true'
        />
        <span className='ml-2 text-xs text-faint'>{title}</span>
      </div>
      <div className='px-5 py-4.5 leading-loose text-muted'>{children}</div>
    </div>
  );
}
