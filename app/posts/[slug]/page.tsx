export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-zinc-300">Peter {params.slug}</h1>
    </div>
  );
}
