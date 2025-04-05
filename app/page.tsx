// app/page.tsx
import WalletButton from "@/components/WalletButton";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Welcome to ImpactChain</h1>
      <WalletButton />
    </main>
  );
}
