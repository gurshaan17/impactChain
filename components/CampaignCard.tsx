
import React from 'react';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export interface Campaign {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  creator: string;
  category: string;
  goalAmount: number;
  currentAmount: number;
  token: "SOL" | "USDC";
  daysLeft: number;
  backers: number;
}

export function CampaignCard({ campaign }: { campaign: Campaign }) {
  const percentFunded = Math.min(100, Math.round((campaign.currentAmount / campaign.goalAmount) * 100));
  
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-video w-full relative overflow-hidden">
        <img 
          src={campaign.imageUrl} 
          alt={campaign.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="outline" className="bg-white/90 text-foreground font-medium backdrop-blur-sm">
            {campaign.category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4 flex-grow">
        <Link 
          href={`/campaigns/${campaign.id}`} 
          className="text-lg font-semibold line-clamp-2 hover:underline mb-2 block"
        >
          {campaign.title}
        </Link>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {campaign.description}
        </p>
        
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">{percentFunded}% Funded</span>
              <span className="text-muted-foreground">
                {campaign.currentAmount} / {campaign.goalAmount} {campaign.token}
              </span>
            </div>
            <Progress value={percentFunded} className="h-2" />
          </div>
          
          <div className="flex justify-between text-sm">
            <div>
              <span className="text-muted-foreground">Backers: </span>
              <span className="font-medium">{campaign.backers}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Days Left: </span>
              <span className="font-medium">{campaign.daysLeft}</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Link 
          href={`/campaigns/${campaign.id}`} 
          className="text-sm font-medium text-primary inline-flex items-center gap-1 hover:underline"
        >
          View Campaign <ArrowUpRight className="h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  );
}
