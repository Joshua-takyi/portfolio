import styles from "./whatsapp.module.css";

const WHATSAPP_NUMBER = "2330504159861";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi Joshua, I found your portfolio and would like to discuss a project with you.",
  );

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Joshua on WhatsApp"
      className={styles.whatsappBtn}
    >
      <img src="images/whatsapp-3.svg" height={40} width={40} />
    </a>
  );
}
