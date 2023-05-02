export default function formatDate(date: Date): string {
  return date.toLocaleDateString("sv-SE", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
}
