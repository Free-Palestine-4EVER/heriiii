"use client"
import styles from "./marquee-announcement.module.css"

interface MarqueeAnnouncementProps {
  messages: string[]
  backgroundColor?: string
  textColor?: string
}

export default function MarqueeAnnouncement({
  messages,
  backgroundColor = "#F39200",
  textColor = "white", // Default is white, but we'll override it below
}: MarqueeAnnouncementProps) {
  return (
    <div className={styles.marqueeContainer} style={{ backgroundColor }}>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent} style={{ color: textColor }}>
          {messages.map((message, index) => (
            <span key={index} style={{ color: textColor }}>
              {message} •{" "}
            </span>
          ))}
          {messages.map((message, index) => (
            <span key={`repeat-${index}`} style={{ color: textColor }}>
              {message} •{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

