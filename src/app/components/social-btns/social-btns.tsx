import { DiscordIcon } from "../icons/discord-icon";
import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedIn-icon";

interface SocialBtnsProps {

}

export function SocialBtns(props : SocialBtnsProps) {
    return (
        <div className="social">
            <a href=""><InstaIcon /> </a>
            <a href=""><DiscordIcon /></a>
            <a href=""><LinkedInIcon /></a>
            <a href=""><GitHubIcon /></a>
        </div>
    )
}