import { Textarea } from "./ui/textarea";
import { Button } from "./components/ui/button";

export default function Navbar() {
  return (
    <div className="border-input flex h-12 items-center border-b">
      <Textarea placeholder="Type your message here." />
    </div>
  );
}
