"use client";

import AuditForm from "@/components/forms/audit-form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-32 text-center">
        <div className="mb-4 rounded-full border border-white/20 px-4 py-2 text-sm text-white/70">
          AI Spend Optimization Platform
        </div>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Stop Overspending on AI Tools
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Audit your AI stack instantly and discover savings opportunities.
        </p>

        <div className="mt-10 flex gap-4">
          <Dialog>
           <DialogTrigger className="rounded-xl bg-white px-6 py-3 font-medium text-black">
  Start Free Audit
</DialogTrigger>

            <DialogContent className="border-white/10 bg-[#0b0b0b] text-white sm:max-w-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  Start Your Free Audit
                </DialogTitle>
              </DialogHeader>

              <AuditForm />
            </DialogContent>
          </Dialog>

          <button className="rounded-xl border border-white/20 px-6 py-3">
            View Demo
          </button>
        </div>
      </section>
    </main>
  );
}