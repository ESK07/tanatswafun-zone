export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/30 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground font-medium">
          Made with friendship for Tanatswa 💖
        </p>
        <p className="mt-2 text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Tanatswa's Fun Zone. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
