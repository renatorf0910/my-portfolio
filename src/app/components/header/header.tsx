import Image from 'next/image'
import "./header.scss"


export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Hi, I'm Renato 👋</h1>
        <h2>Software Engineer</h2>
      </div>
      <Image
        src="/profile.jpg"
        alt="Profile"
        // className={styles.vercelLogo}
        width={285}
        height={277}
        priority
      />
    </div>
  )
}