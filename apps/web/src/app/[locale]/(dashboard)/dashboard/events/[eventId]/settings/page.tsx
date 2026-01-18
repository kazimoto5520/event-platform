export default async function EventSettingsPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Settings for {eventId}</h1>
      <p>Configuration settings for this event.</p>
    </div>
  );
}
