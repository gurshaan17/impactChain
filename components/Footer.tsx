import Link from "next/link"
export function Footer() {
  return (
    <footer className="border-t py-8 mt-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-solana">
                <span className="text-white font-bold">IC</span>
              </div>
              <h2 className="text-lg font-bold">
                <span className="gradient-text">Impact</span>Chain
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Decentralized crowdfunding on Solana.
              <br />
              Fund projects with transparency and trust.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/campaigns" className="text-sm text-muted-foreground hover:text-foreground">
                  Browse Campaigns
                </Link>
              </li>
              <li>
                <Link href="/create" className="text-sm text-muted-foreground hover:text-foreground">
                  Create Campaign
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/creator" className="text-sm text-muted-foreground hover:text-foreground">
                  Creator Portal
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ImpactChain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
