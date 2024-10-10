import Links from "./links";

export default function Footer() {
  return (
    <div className="space-y-16">
      <div className="flex gap-3 items-center">
        <div className="size-3 bg-green-400 rounded-full animation-pulse"></div>
        <p className="text-sm">
            figuring out, since birth.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p>© 2024 dhruv bhavsar.</p>
        <Links />
      </div>
    </div>
  );
}
