import { permanentRedirect } from "next/navigation";

export default function NewsPage() {
  permanentRedirect("/en/news");
}
