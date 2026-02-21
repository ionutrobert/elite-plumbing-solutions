import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Thank you! We will contact you shortly.");
  };

  return (
    <section className="py-32 bg-dark" id="contact">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              START YOUR PROJECT.
            </h2>
            <p className="text-white/50 text-xl mb-12 leading-relaxed">
              Ready for elite service? Fill out the form and our team will get
              back to you within 30 minutes for emergency requests or 24 hours
              for standard quotes.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-2">
                  Call Us Directly
                </p>
                <p className="text-3xl font-bold text-accent">
                  +1 (800) 555-0199
                </p>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-2">
                  Our Location
                </p>
                <p className="text-xl">
                  123 Industrial Way, Suite 100
                  <br />
                  Metropolis, NY 10001
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold tracking-widest uppercase text-white/70"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    {...register("name", { required: "Full name is required" })}
                    className={`w-full bg-white/5 border px-4 py-4 outline-none transition-all focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark ${errors.name ? "border-red-500" : "border-white/10 focus:border-accent"}`}
                    placeholder="John Doe"
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs font-bold tracking-wide uppercase">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold tracking-widest uppercase text-white/70"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full bg-white/5 border px-4 py-4 outline-none transition-all focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark ${errors.email ? "border-red-500" : "border-white/10 focus:border-accent"}`}
                    placeholder="john@example.com"
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs font-bold tracking-wide uppercase">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-xs font-bold tracking-widest uppercase text-white/70"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className={`w-full bg-white/5 border px-4 py-4 outline-none transition-all focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark ${errors.phone ? "border-red-500" : "border-white/10 focus:border-accent"}`}
                    placeholder="+1 (555) 000-0000"
                    aria-invalid={errors.phone ? "true" : "false"}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs font-bold tracking-wide uppercase">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="text-xs font-bold tracking-widest uppercase text-white/70"
                  >
                    Service Needed
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      {...register("service", { required: true })}
                      aria-label="Select Service"
                      className="w-full bg-white/5 border border-white/10 px-4 py-4 focus:border-accent outline-none transition-all focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark appearance-none text-white/70"
                    >
                      <option value="emergency" className="bg-dark text-white">
                        Emergency Repair
                      </option>
                      <option
                        value="water-heater"
                        className="bg-dark text-white"
                      >
                        Water Heater
                      </option>
                      <option value="drain" className="bg-dark text-white">
                        Drain Cleaning
                      </option>
                      <option value="other" className="bg-dark text-white">
                        Other Service
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-bold tracking-widest uppercase text-white/70"
                >
                  Message{" "}
                  <span className="text-white/40 font-normal text-xs ml-1">
                    (Optional)
                  </span>
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 px-4 py-4 focus:border-accent outline-none transition-all focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark resize-none"
                  placeholder="Tell us about your plumbing needs..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-accent text-dark font-bold py-5 tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-accent/90 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
              >
                Send Request <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
