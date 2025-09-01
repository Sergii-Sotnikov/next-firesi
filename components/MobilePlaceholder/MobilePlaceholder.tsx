export default function MobilePlaceholder() {
  return (
    <main style={{
      minHeight: "100dvh",
      display: "grid",
      placeItems: "center",
      padding: 24,
      background: "#0f1115",
      color: "#e7eaf0",
      textAlign: "center"
    }}>
      <div style={{
        maxWidth: 640,
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 20,
        padding: 28
      }}>
        <h1 style={{ margin: "0 0 8px", fontSize: 28, fontWeight: 800 }}>
          Ми підганяємо пікселі під твою долоню.
        </h1>
        <p style={{ margin: "0 0 6px", opacity: 0.9 }}>
          Трішки терпіння - і мобільна версія буде готова.
        </p>
        <p style={{ margin: "0 0 18px", opacity: 0.9 }}>
          Найкраще зараз - з комп’ютера 😉
        </p>
      </div>
    </main>
  );
}