// src/pages/Analysis.tsx
import { Card, CardContent } from "@/components/ui/card";

const Analysis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-6">
      <Card className="w-full h-[90vh] bg-black/60 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-2xl overflow-hidden">
        <CardContent className="p-0 w-full h-full">
          <iframe
            src="http://localhost:8501"
            className="w-full h-full border-0 rounded-2xl"
            title="Streamlit Dashboard"
          ></iframe>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analysis;
