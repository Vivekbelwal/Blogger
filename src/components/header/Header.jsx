import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="data:image/jpeg;base64,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"
        alt="header"
      />
    </div>
  );
}