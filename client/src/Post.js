export default function Post () {
    return (
      <div className="post">
        <div className="image">
          <img src="https://techcrunch.com/wp-content/uploads/2024/06/GettyImages-2157160096.jpg?resize=1200,801" alt="" />
        </div>
        <div className="texts">
          <h2>Databricks expands Mosaic AI to help enterprises build with LLMs</h2>
          <p className="info">
            <a className="author">Dummy author</a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className="summary">A year ago, Databricks acquired MosaicML for $1.3 billion. Now rebranded as Mosaic AI, the platform has become integral to Databricks’ AI solutions. Today, at the company’s Data + AI Summit, it is launching a number of new features for the service. Ahead of the announcements, I spoke to Databricks co-founders CEO Ali Ghodsi and CTO Matei Zaharia.
          Databricks is launching five new Mosaic AI tools at its conference: Mosaic AI Agent Framework, Mosaic AI Agent Evaluation, Mosaic AI Tools Catalog, Mosaic AI Model Training, and Mosaic AI Gateway.</p>
        </div>
      </div>
    );
}