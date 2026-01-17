export default async function EventPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Event Overview: {eventId}</h1>
      <p>Details for event {eventId}.</p>
    </div>
  );
}
