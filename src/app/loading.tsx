import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background gap-12">
      {/* Logo */}
      <div className="h-64 w-64 md:h-80 md:w-80 overflow-hidden relative">
        <Image
          src="/images/logo.png"
          alt="BugCab Logo"
          width={320}
          height={320}
          priority
          className="h-full w-full object-contain"
        />
      </div>

      {/* Loading Animation */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex h-1 w-64 overflow-hidden rounded-full bg-border">
          <div className="absolute inset-y-0 left-0 w-1/3 animate-slide rounded-full bg-lime" />
        </div>
        <span className="animate-pulse font-mono text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Loading
        </span>
      </div>
    </div>
  );
}
