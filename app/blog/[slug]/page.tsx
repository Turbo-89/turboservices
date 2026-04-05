import { redirect } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function BlogSlugPage(_props: Props) {
  redirect("/kennisbank");
}