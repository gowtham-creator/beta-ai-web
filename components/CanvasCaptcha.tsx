"use client";

import { useState, useRef, useEffect, useCallback, forwardRef, useImperativeHandle } from "react";

export interface CanvasCaptchaRef {
  getValue: () => string | null;
  reset: () => void;
}

const CAPTCHA_LENGTH = 6;
const CANVAS_WIDTH = 220;
const CANVAS_HEIGHT = 60;

function generateCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  let code = "";
  for (let i = 0; i < CAPTCHA_LENGTH; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function drawCaptcha(canvas: HTMLCanvasElement, code: string) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Background
  ctx.fillStyle = "#f8fafc";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // Noise lines
  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * CANVAS_WIDTH, Math.random() * CANVAS_HEIGHT);
    ctx.lineTo(Math.random() * CANVAS_WIDTH, Math.random() * CANVAS_HEIGHT);
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 40%, 75%)`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Noise dots
  for (let i = 0; i < 40; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random() * CANVAS_WIDTH,
      Math.random() * CANVAS_HEIGHT,
      1,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = `hsl(${Math.random() * 360}, 30%, 70%)`;
    ctx.fill();
  }

  // Draw characters
  const startX = 20;
  const spacing = (CANVAS_WIDTH - 40) / CAPTCHA_LENGTH;

  for (let i = 0; i < code.length; i++) {
    ctx.save();
    const x = startX + i * spacing;
    const y = CANVAS_HEIGHT / 2;
    const angle = (Math.random() - 0.5) * 0.4;
    const fontSize = 22 + Math.random() * 6;

    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.font = `bold ${fontSize}px 'Courier New', monospace`;
    ctx.fillStyle = `hsl(${250 + Math.random() * 40}, 60%, ${35 + Math.random() * 15}%)`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(code[i], 0, 0);
    ctx.restore();
  }
}

const CanvasCaptcha = forwardRef<CanvasCaptchaRef, { onChange?: () => void }>(
  ({ onChange }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [code, setCode] = useState("");
    const [input, setInput] = useState("");
    const [verified, setVerified] = useState(false);

    const regenerate = useCallback(() => {
      const newCode = generateCode();
      setCode(newCode);
      setInput("");
      setVerified(false);
    }, []);

    useEffect(() => {
      regenerate();
    }, [regenerate]);

    useEffect(() => {
      if (canvasRef.current && code) {
        drawCaptcha(canvasRef.current, code);
      }
    }, [code]);

    useImperativeHandle(ref, () => ({
      getValue: () => (verified ? code : null),
      reset: () => regenerate(),
    }));

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setInput(val);

      if (val.length === CAPTCHA_LENGTH) {
        if (val === code) {
          setVerified(true);
          onChange?.();
        } else {
          setVerified(false);
          regenerate();
        }
      } else {
        setVerified(false);
      }
    };

    return (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <canvas
            ref={canvasRef}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            className="rounded-xl border border-slate-200 select-none"
            style={{ imageRendering: "auto" }}
          />
          <button
            type="button"
            onClick={regenerate}
            className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors text-gray-500 hover:text-gray-700"
            title="Refresh captcha"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Enter the code above"
            maxLength={CAPTCHA_LENGTH}
            autoComplete="off"
            className={`w-full max-w-[220px] px-4 py-2.5 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 text-sm tracking-widest ${
              verified
                ? "border-green-300 bg-green-50 focus:ring-green-200"
                : "border-slate-200 bg-slate-50 focus:ring-brand-purple/30 focus:border-brand-purple"
            }`}
          />
          {verified && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-sm font-semibold">
              ✓
            </span>
          )}
        </div>
      </div>
    );
  }
);

CanvasCaptcha.displayName = "CanvasCaptcha";

export default CanvasCaptcha;
