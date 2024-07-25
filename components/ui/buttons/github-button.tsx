import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "../button";

export const GitHubButton = () => {
  return (
    <Button
      variant="outline"
      size="icon"
    >
      <Link
        href="https://github.com/DannyDorito/arma-reforger-config-shad"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Link to Danny Dorito's GitHub"
      >
        <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]"></GitHubLogoIcon>
      </Link>
    </Button>
  );
};
