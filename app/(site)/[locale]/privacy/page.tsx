export const metadata = {
  title: "Refund Policy",
};

export default function RefundsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Refund Policy</h1>

      <div className="prose prose-slate mt-8 max-w-none">
        <h2>Trial lessons</h2>
        <p>If you offer trials, state whether they are refundable or not.</p>

        <h2>Packages</h2>
        <p>
          If you sell lesson packages, specify how refunds work for unused lessons (e.g., unused lessons refundable minus fees),
          and whether partially used packages are refundable.
        </p>

        <h2>Cancellations</h2>
        <p>Define your cancellation window (e.g., free reschedule up to 24 hours before).</p>

        <h2>How to request a refund</h2>
        <p>Email: support@yourdomain.com with your name, purchase details, and reason.</p>
      </div>
    </main>
  );
}
