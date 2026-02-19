import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Property from "@/models/Property";
import Claim from "@/models/Claim";
import FAQ from "@/models/FAQ";
import StatItem from "@/models/StatItem";
import { ChartDataPoint, RadialChartDataPoint, RadialChartAsset } from "@/models/ChartData";
import TeamMember from "@/models/TeamMember";
import NFTListing from "@/models/NFTListing";
import MarketplaceStats from "@/models/MarketplaceStats";

const seedData = {
  properties: [
    { image: "/assets/image2.jpg", type: "Entire Home/Apt.", location: "Location Here", rating: 4.9, price: 314 },
    { image: "/assets/house2.jpg", type: "Entire Home/Apt.", location: "Location Here", rating: 4.9, price: 314 },
    { image: "/assets/house3.jpg", type: "Entire Home/Apt.", location: "Location Here", rating: 4.9, price: 314 },
  ],
  faq: [
    { question: "What Percentage Of The Year Typically Goes Unused In NFsTay's Rental Properties?", answer: "Approximately 30% of the year's inventory goes unused in NFsStay's rental properties, presenting a significant opportunity for innovation and optimization." },
    { question: "Maecenas Volutpat Metus At Felis Suscipit, A Rhoncus Turpis Faucibus.", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  ],
  claims: [
    { source: "Boardroom", date: "11 Dec, 2024", time: "9:26 PM", amount: "8.75 MyUSD", status: "Burned" as const },
    { source: "Farm", date: "11 Dec, 2024", time: "9:26 PM", amount: "8.75 MyUSD", status: "Burned" as const },
    { source: "STAYking", date: "11 Dec, 2024", time: "9:26 PM", amount: "8.75 MyUSD", status: "Claimed" as const },
  ],
  dashboardStats: [
    { statsType: "dashboard" as const, label: "Your Liquidity", value: "0.9906", iconKey: "liquidity" },
    { statsType: "dashboard" as const, label: "Total STAYked", value: "1347", iconKey: "stayked" },
    { statsType: "dashboard" as const, label: "ROCKS Staked", value: "1347", iconKey: "rocks" },
    { statsType: "dashboard" as const, label: "Total Value Locked", value: "$12,812.98", gradient: true, iconKey: "tvl" },
  ],
  printerStats: [
    { statsType: "printer" as const, label: "Staked ROCKS", value: "100", iconKey: "rocks" },
    { statsType: "printer" as const, label: "Locked STAYS", value: "0.9906", iconKey: "lock" },
    { statsType: "printer" as const, label: "Current APR", value: "59.36%", gradient: true, iconKey: "card" },
    { statsType: "printer" as const, label: "Claimed Rewards", value: "1250", sub: "=$1,250", gradient: true, iconKey: "rewards" },
  ],
  farmStats: [
    { statsType: "farm" as const, label: "Epoch", value: "01:35:11", iconKey: "epoch" },
    { statsType: "farm" as const, label: "Your Liquidity", value: "0.9906", iconKey: "liquidity" },
    { statsType: "farm" as const, label: "APR", value: "59.36%", iconKey: "card" },
    { statsType: "farm" as const, label: "Unclaimed Rewards", value: "1347", iconKey: "rewards" },
  ],
  team: [
    { name: "João Souza", role: "Founder", image: "/assets/VrImg.png", linkedinUrl: "https://linkedin.com" },
    { name: "Valéria Alves", role: "General Manager", image: "/assets/VrImg.png", linkedinUrl: "https://linkedin.com" },
    { name: "Hugo Souza", role: "Co-Founder", image: "/assets/VrImg.png", linkedinUrl: "https://linkedin.com" },
  ],
  nftListings: [
    { tokenId: "1234", creator: "0xd8...d...", price: "925.0", image: "/assets/image2.jpg", title: "ROCK #1234" },
  ],
  marketplaceStats: { rocksListed: 1347, totalSalesVolume: "$12,812.98" },
  radialData: { rocks: 53, lpTokens: 25, stay: 22 },
  radialAssets: [
    { name: "Rocks", percentage: 53, color: "#9945FF" },
    { name: "LP Tokens", percentage: 25, color: "#20E19F" },
    { name: "Stay", percentage: 22, color: "#00A3FF" },
  ],
};

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Seed disabled in production" }, { status: 403 });
  }
  try {
    await connectDB();

    await Property.deleteMany({});
    await Claim.deleteMany({});
    await FAQ.deleteMany({});
    await StatItem.deleteMany({});
    await ChartDataPoint.deleteMany({});
    await RadialChartDataPoint.deleteMany({});
    await RadialChartAsset.deleteMany({});
    await TeamMember.deleteMany({});
    await NFTListing.deleteMany({});
    await MarketplaceStats.deleteMany({});

    await Property.insertMany(seedData.properties);
    await Claim.insertMany(seedData.claims);
    await FAQ.insertMany(seedData.faq);
    await StatItem.insertMany([...seedData.dashboardStats, ...seedData.printerStats, ...seedData.farmStats]);
    await TeamMember.insertMany(seedData.team);
    await NFTListing.insertMany(seedData.nftListings);
    await MarketplaceStats.create(seedData.marketplaceStats);
    await RadialChartDataPoint.create(seedData.radialData);
    await RadialChartAsset.insertMany(seedData.radialAssets);

    const portfolioSample = [
      { chartType: "portfolio" as const, date: "2024-04-01", mobile: 150 },
      { chartType: "portfolio" as const, date: "2024-04-02", mobile: 180 },
      { chartType: "portfolio" as const, date: "2024-05-01", mobile: 220 },
      { chartType: "portfolio" as const, date: "2024-06-01", mobile: 200 },
    ];
    const lineSample = [
      { chartType: "line" as const, date: "2024-04-01", desktop: 222, mobile: 150 },
      { chartType: "line" as const, date: "2024-04-02", desktop: 97, mobile: 180 },
    ];
    await ChartDataPoint.insertMany([...portfolioSample, ...lineSample]);

    return NextResponse.json({
      ok: true,
      message: "Database seeded successfully",
      counts: {
        properties: seedData.properties.length,
        claims: seedData.claims.length,
        faq: seedData.faq.length,
        stats: seedData.dashboardStats.length + seedData.printerStats.length + seedData.farmStats.length,
        team: seedData.team.length,
        nftListings: seedData.nftListings.length,
      },
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { error: "Seed failed", details: String(error) },
      { status: 500 }
    );
  }
}
