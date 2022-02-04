interface ExternalLinkProps {
    url: string;
    icon: string;
    text: string;
    notNewTab?: boolean;
}

const ExternalLink = (props: ExternalLinkProps) => (
    <a href={props.url} rel="noreferrer" target={props.notNewTab ? "_self" : "_blank" }>
        <i className={props.icon}></i>
        <span>{props.text}</span>
    </a>
)

export default ExternalLink;
