import { ModeToggle } from "@/components/ModeToggle";
import {
  Navbar,
  NavBody,
  NavItems,
  // NavbarButton,
  NavbarLogo,
} from "./Resizable-navbar";
import { CommonGradientBtn } from "./gradient-button";
interface NavbarProps {
  className?: string;
  variant?: "default" | "glass";
  children: React.ReactNode;
}

export default function HomeNav() {
  return (
    <Navbar className="fixed top-15 left-0">
      <NavBody>
        <NavbarLogo />
        <NavItems
          className="text-white"
          items={[
            { name: "Dashboard", link: "/dashboard" },
            { name: "Printer", link: "/printer" },
            { name: "Farm", link: "/farm" },
            { name: "MarketPlace", link: "/marketplace" },
            { name: "Migrate", link: "/migrate" },
            { name: "Portfolio", link: "/portfolio" },
          ]}
          
          />

        <div className=" px-15">
          <div className="absolute left-100 ">
          <ModeToggle/>
          </div>
          <CommonGradientBtn
          className="bg-transparent"
            label="Launch dApp"
            icon={
              <g style={{ mixBlendMode: "luminosity", opacity: 0.6 }}>
                <rect
                  width="179.652"
                  height="71"
                  fill="url(#pattern0_1863_1206)"
                />
              </g>
            }
          />
        </div>
      </NavBody>
    </Navbar>
  );
}
