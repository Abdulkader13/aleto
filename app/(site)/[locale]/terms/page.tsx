export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Terms of Service</h1>

      <div className="prose prose-slate mt-8 max-w-none">
        <p>
          By using this website and booking lessons, you agree to these terms.
        </p>

        <h2>Services</h2>
        <p>We provide language lessons and related materials as described on the website.</p>

        <h2>Bookings</h2>
        <p>Lesson scheduling and rescheduling rules are communicated during booking/confirmation.</p>

        <h2>Payments</h2>
        <p>Payment methods and pricing are shown during booking or via direct communication.</p>

        <h2>Acceptable use</h2>
        <p>Don’t misuse the site, attempt unauthorized access, or disrupt services.</p>

        <h2>Liability</h2>
        <p>We’re not liable for indirect losses. Our liability is limited to the amount paid for services.</p>

        <h2>Contact</h2>
        <p>Email: support@yourdomain.com</p>
      </div>
    </main>
  );
}
