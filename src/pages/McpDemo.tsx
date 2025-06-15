import React, { useState } from 'react';
import { mcpFetch } from '@/lib/mcp';

export default function McpDemo() {
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    setResult('');
    try {
      // Example: call /v1/info endpoint (supported by most MCP servers)
      const data = await mcpFetch('/v1/info');
      setResult(JSON.stringify(data, null, 2));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>MCP Server Connection Test</h2>
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch MCP /v1/info'}
      </button>
      {error && <pre style={{ color: 'red' }}>{error}</pre>}
      {result && <pre>{result}</pre>}
    </div>
  );
}
