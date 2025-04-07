
'use client';

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { CampaignCard, Campaign } from "@/components/CampaignCard";
import { CategoryFilters } from "@/components/CategoryFilters";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";

// Mock campaigns data
const mockCampaigns: Campaign[] = [
  {
    id: "1",
    title: "Sustainable Urban Farm Project",
    description: "Building vertical gardens in urban areas to promote sustainability and fresh local produce",
    imageUrl: "https://images.unsplash.com/photo-1493113039241-84a3bb4e3b55?q=80&w=1000",
    creator: "8boLJTywvKQtdFLqeXZVt4OVcEXdeYGpN2xD1CJ9xX4k",
    category: "Environment",
    goalAmount: 50,
    currentAmount: 35,
    token: "SOL",
    daysLeft: 12,
    backers: 87
  },
  {
    id: "2",
    title: "Decentralized Education Platform",
    description: "Creating a blockchain-based platform for accessible and verifiable educational credentials",
    imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1000",
    creator: "8boLJTywvKQtdFLqeXZVt4OVcEXdeYGpN2xD1CJ9xX4k",
    category: "Education",
    goalAmount: 10000,
    currentAmount: 7500,
    token: "USDC",
    daysLeft: 20,
    backers: 124
  },
  {
    id: "3",
    title: "Community Health Clinic",
    description: "Establishing a health clinic providing free services to underserved communities",
    imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000",
    creator: "8boLJTywvKQtdFLqeXZVt4OVcEXdeYGpN2xD1CJ9xX4k",
    category: "Health",
    goalAmount: 25000,
    currentAmount: 18750,
    token: "USDC",
    daysLeft: 15,
    backers: 210
  },
  {
    id: "4",
    title: "Web3 Developer Bootcamp Scholarships",
    description: "Providing scholarships for underrepresented groups to learn blockchain development",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000",
    creator: "8boLJTywvKQtdFLqeXZVt4OVcEXdeYGpN2xD1CJ9xX4k",
    category: "Technology",
    goalAmount: 75,
    currentAmount: 45,
    token: "SOL",
    daysLeft: 30,
    backers: 56
  }
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Filter campaigns by category if needed
  const filteredCampaigns = selectedCategory === "all" 
    ? mockCampaigns 
    : mockCampaigns.filter(campaign => 
        campaign.category.toLowerCase() === selectedCategory
      );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-solana-purple/10 to-solana-teal/5 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Transparent Crowdfunding on <span className="gradient-text">Solana</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Fund innovative projects with milestone-based goals. Track progress with full transparency and vote on fund releases.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-gradient-solana text-white hover:opacity-90">
                  <Link href="/campaigns">Browse Campaigns</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/create">Create Campaign</Link>
                </Button>
              </div>
            </div>
            <div className="relative lg:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000"
                alt="ImpactChain Dashboard"
                className="mx-auto rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-solana-purple/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Why Use ImpactChain?</h2>
            <p className="text-muted-foreground md:text-lg md:w-2/3 mx-auto">
              Our decentralized platform offers unique advantages for both creators and backers
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-solana-purple/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-solana-purple">
                  <path d="M12 22V8" /><path d="m5 12-2-2 2-2" /><path d="m19 12 2-2-2-2" /><path d="M5 12h14" /><path d="M12 2v4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Milestone-Based</h3>
              <p className="text-muted-foreground">
                Campaign funds are released gradually based on achieved milestones, ensuring accountability.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-solana-teal/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-solana-teal">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Transparent Voting</h3>
              <p className="text-muted-foreground">
                Backers democratically vote on milestone completions before funds are released.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-solana-purple/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-solana-purple">
                  <circle cx="12" cy="12" r="10" /><path d="m4.93 4.93 4.24 4.24" /><path d="m14.83 9.17 4.24-4.24" /><path d="m14.83 14.83 4.24 4.24" /><path d="m9.17 14.83-4.24 4.24" /><circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">NFT Receipts</h3>
              <p className="text-muted-foreground">
                Receive NFT receipts for your donations, enabling voting rights and potential refunds.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Campaigns */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Campaigns</h2>
            <Button asChild variant="link" className="gap-1">
              <Link href="/campaigns">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <CategoryFilters 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory}
          />
          
          <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
            {filteredCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="space-y-4 flex-1">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                Ready to Launch Your Campaign?
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Start collecting funds and building support for your idea today with our decentralized crowdfunding platform.
              </p>
              <Button asChild className="bg-gradient-solana text-white hover:opacity-90">
                <Link href="/create">Create Campaign</Link>
              </Button>
            </div>
            <div className="flex-1 lg:max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000" 
                alt="Creating a campaign" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
