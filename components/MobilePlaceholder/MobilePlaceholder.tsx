export default function MobilePlaceholder() {
  return (
    <main
      style={{
        paddingTop: 0,               // ← додали тут
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        padding: 24,
        background: "#0f1115",
        color: "#e7eaf0",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: 640,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 20,
          padding: 28,
        }}
      >
        <h1 style={{ margin: "0 0 8px", fontSize: 28, fontWeight: 800 }}>
          Мобільна версія — майже готова
        </h1>
        <p style={{ margin: "0 0 6px", opacity: 0.9 }}>
          Дизайнер шліфує макети, розробник доточує код.
        </p>
        <p style={{ margin: 0, opacity: 0.9 }}>
          Зазирни за кілька днів або відкрий сайт на комп’ютері — там усе вже працює.
        </p>
      </div>
    </main>
  );
}