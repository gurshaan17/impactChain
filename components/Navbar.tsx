
import { Search } from "lucide-react";
import WalletButton from "./WalletButton";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-solana">
              <span className="text-white font-bold">IC</span>
            </div>
            <h1 className="text-lg font-bold">
              <span className="gradient-text">Impact</span>Chain
            </h1>
          </Link>
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/campaigns" className="text-sm font-medium hover:text-primary">
            Browse Campaigns
          </Link>
          <Link href="/create" className="text-sm font-medium hover:text-primary">
            Create Campaign
          </Link>
          <Link href="/dashboard" className="text-sm font-medium hover:text-primary">
            Dashboard
          </Link>
        </div>

        {/* Search and Wallet */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search campaigns..."
              className="w-[200px] pl-8 md:w-[300px] lg:w-[400px]"
            />
          </div>
          <WalletButton />
        </div>
      </div>
    </nav>
  );
}
