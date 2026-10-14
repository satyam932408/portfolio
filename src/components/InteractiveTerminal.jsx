import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, RefreshCw } from 'lucide-react';
import { terminalResponses } from '../data/portfolioData';

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `Satyam Jha Developer Terminal [Version 2.4.0]\nType 'help' to see available commands or click the shortcut chips below.`
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    // Add to input history
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryPointer(-1);

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (cleanCmd === 'resume' || cleanCmd === 'cv') {
      window.open('/satyam-latest-cv.pdf', '_blank');
    }

    const output =
      terminalResponses[cleanCmd] ||
      `Command not recognized: '${cleanCmd}'. Type 'help' to view valid commands.`;

    setHistory((prev) => [
      ...prev,
      { type: 'user', text: `satyam@portfolio:~$ ${cmd}` },
      { type: 'output', text: output }
    ]);

    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextPointer = historyPointer === -1 ? commandHistory.length - 1 : Math.max(0, historyPointer - 1);
      setHistoryPointer(nextPointer);
      setInputVal(commandHistory[nextPointer]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyPointer === -1) return;
      const nextPointer = historyPointer + 1;
      if (nextPointer >= commandHistory.length) {
        setHistoryPointer(-1);
        setInputVal('');
      } else {
        setHistoryPointer(nextPointer);
        setInputVal(commandHistory[nextPointer]);
      }
    }
  };

  const quickCommands = ['help', 'about', 'skills', 'projects', 'certifications', 'experience', 'achievements', 'resume', 'contact', 'clear'];

  return (
    <section id="terminal" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-3">
            <TerminalIcon size={13} />
            <span>Developer Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interactive <span className="glow-gradient-text">Developer CLI</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300/80">
            Explore my profile interactively using a lightweight Linux terminal simulation.
          </p>
        </div>

        {/* Quick Command Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="text-xs text-slate-400 font-mono">Quick run:</span>
          {quickCommands.map((qc) => (
            <button
              key={qc}
              onClick={() => handleCommand(qc)}
              className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-indigo-500/20 text-indigo-300 hover:text-white border border-white/[0.08] text-xs font-mono transition-colors cursor-pointer"
            >
              {qc}
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl bg-[#090d14] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          {/* Top Bar */}
          <div className="px-4 py-3 bg-[#0c111a] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <TerminalIcon size={14} className="text-indigo-400" />
              <span>bash - satyam@portfolio:~</span>
            </div>
            <button
              onClick={() => handleCommand('clear')}
              className="text-slate-400 hover:text-slate-200 transition-colors p-1"
              title="Clear terminal"
            >
              <RefreshCw size={13} />
            </button>
          </div>

          {/* Terminal Screen Body */}
          <div ref={terminalBodyRef} className="p-5 min-h-[320px] max-h-[460px] overflow-y-auto space-y-3 bg-[#070a10]">
            {history.map((item, index) => (
              <div key={index} className="leading-relaxed">
                {item.type === 'user' ? (
                  <div className="text-emerald-400 font-semibold">{item.text}</div>
                ) : item.type === 'system' ? (
                  <div className="text-indigo-300 whitespace-pre-wrap">{item.text}</div>
                ) : (
                  <div className="text-slate-200 whitespace-pre-wrap pl-2 border-l-2 border-indigo-500/40">
                    {item.text}
                  </div>
                )}
              </div>
            ))}

            {/* Input Row */}
            <div className="flex items-center gap-2 pt-2 text-emerald-400">
              <span className="shrink-0 select-none">satyam@portfolio:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. 'help', 'projects', 'skills')..."
                className="w-full bg-transparent outline-none border-none text-slate-100 placeholder:text-slate-600 font-mono text-xs sm:text-sm"
                autoFocus={false}
              />
              <button
                type="button"
                onClick={() => handleCommand(inputVal)}
                className="text-slate-400 hover:text-slate-200 cursor-pointer p-1"
                aria-label="Submit command"
              >
                <CornerDownLeft size={14} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
