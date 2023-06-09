import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <header>Getting Started with Solid</header>
      <div>
        <h2>Work Items</h2>
        <p>
          Step One: Build a List of Links with Tags, store it somewhere,
          retrieve it at buildtime, and display it here
        </p>
        <p>Step Two: Make the List Filterable</p>
        <p>
          Step Three: Design this page as three sections: header, issues list,
          and docs links
        </p>
        <p>
          Step Four: Create a roadmap, starting with these items, and replace
          this section with the roadmap
        </p>
        <p>Step Five: Create issues for each of the above</p>
        <p>Step Six: Iterate</p>
      </div>
    </main>
  );
}
