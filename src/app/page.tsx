import Input from "@/components/Input";

export default function Home() {
  return (
    <div className="flex-1 bg-background flex flex-col items-center">
      <h1 className="text-4xl font-bold text-accent mt-10 mb-10">Willkommen</h1>
      <div className="w-full max-w-md p-8 rounded-lg">
        <form>
          <h2 className="text-2xl font-semibold mb-8">Anmelden</h2>
          <div className="mb-6">
            <Input
              label="Username"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-6">
            <Input
              type="password"
              label="Password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-accent text-white font-semibold rounded-md hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Log In
          </button>

          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-accent hover:underline">
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
