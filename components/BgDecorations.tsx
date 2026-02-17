/* eslint-disable @next/next/no-img-element */

interface DecorationItem {
  asset: 1 | 2 | 3;
  className: string;
  color: "coral" | "purple";
  opacity?: number;
  rotate?: number;
  scale?: number;
  flipX?: boolean;
  flipY?: boolean;
}

const assetPaths: Record<number, string> = {
  1: "/assets/bg-asset-1.svg",
  2: "/assets/bg-asset-2.svg",
  3: "/assets/bg-asset-3.svg",
};

// CSS filters to convert black SVGs to brand colors
const colorFilters: Record<string, string> = {
  coral:
    "brightness(0) saturate(100%) invert(37%) sepia(95%) saturate(2584%) hue-rotate(335deg) brightness(97%) contrast(94%)",
  purple:
    "brightness(0) saturate(100%) invert(26%) sepia(92%) saturate(4872%) hue-rotate(263deg) brightness(87%) contrast(94%)",
};

export default function BgDecorations({
  items,
}: {
  items: DecorationItem[];
}) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((item, i) => {
        const scaleX = (item.scale ?? 1) * (item.flipX ? -1 : 1);
        const scaleY = (item.scale ?? 1) * (item.flipY ? -1 : 1);
        const rotate = item.rotate ?? 0;

        return (
          <img
            key={i}
            src={assetPaths[item.asset]}
            alt=""
            aria-hidden="true"
            className={item.className}
            style={{
              position: "absolute",
              opacity: item.opacity ?? 0.06,
              transform: `rotate(${rotate}deg) scaleX(${scaleX}) scaleY(${scaleY})`,
              filter: colorFilters[item.color],
            }}
          />
        );
      })}
    </div>
  );
}
