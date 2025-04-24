import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Components/layout";

const BlogHeader = () => {
  return (
    <Layout>
      <div className="relative w-full bg-gray-900">
        {/* Hero image background */}
        <div
          className="h-[500px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url("https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1")`,
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        </div>

        {/* Content container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-32 relative z-10">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl p-8 sm:p-10 text-white">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">
                  Blog Title That Might Be Really Long
                </h1>
                <p className="text-sm text-white/80">
                  by <span className="font-semibold text-white">Author</span> ·
                  <Link to="#" className="hover:text-blue-300 underline mr-3">
                    Category
                  </Link>
                  <Link to="#" className="hover:text-pink-300 underline">
                    Subtitle
                  </Link>
                </p>
              </div>

              <div className="flex gap-2">
                <Link to="/blog/edit/">
                  <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition backdrop-blur-md">
                    ✏️ Edit
                  </button>
                </Link>
                <button
                  onClick={() =>
                    window.confirm("Are you sure you want to delete this blog?")
                  }
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  🗑 Delete
                </button>
              </div>
            </div>

            {/* Long Text Support */}
            <div className="mt-6 text-white/90 text-base leading-relaxed">
              <p>
                Here's your blog post description, and it can now be **as long
                as you want**. Whether it's a quick summary or an essay-length
                intro, this section will grow naturally without clipping or
                overlapping.
              </p>
              <p className="mt-4">
                You can keep adding content, and it will keep expanding the
                card. There's no layout limitation here anymore — it's all in
                normal document flow. You can even add additional sections or
                components below this if needed. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. In eligendi quam voluptatum
                quibusdam assumenda placeat tenetur at quod ut omnis eaque
                laboriosam consequatur, non cupiditate natus quae explicabo qui
                dolor!
              </p>
            </div>
          </div>
        </div>

        {/* Spacer to push content below if needed */}
        <div className="h-16 sm:h-24" />
      </div>
    </Layout>
  );
};

export default BlogHeader;
