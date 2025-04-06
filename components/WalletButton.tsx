'use client';

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import dynamic from "next/dynamic";

// Prevent SSR
const WalletMultiButtonDynamic = dynamic(
  () => Promise.resolve(WalletMultiButton),
  { ssr: false }
);

export default function WalletButton() {
  return <WalletMultiButtonDynamic className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-4 rounded" />;
}
