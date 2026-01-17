export default async function EventInvitationsPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Invitations for {eventId}</h1>
      <p>List of invitations for this event.</p>
    </div>
  );
}
