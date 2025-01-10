import Button from '@/components/Button';
import Input from '@/components/Input';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-background">
      <h1 className="mb-10 mt-10 text-4xl font-bold text-accent">Willkommen</h1>
      <div className="w-full max-w-md rounded-lg p-8">
        <form>
          <h2 className="mb-8 text-2xl font-semibold">Anmelden</h2>
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

          <Button type="submit">Log In</Button>

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
