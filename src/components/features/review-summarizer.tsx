"use client"

import { useState } from "react"
import { summarizeTechnicianReviews } from "@/ai/flows/summarize-technician-reviews"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2, Wand2, AlertTriangle } from "lucide-react"

type ReviewSummarizerProps = {
    reviews: string
}

export default function ReviewSummarizer({ reviews: initialReviews }: ReviewSummarizerProps) {
    const [reviews, setReviews] = useState(initialReviews);
    const [summary, setSummary] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSummarize = async () => {
        setIsLoading(true);
        setError(null);
        setSummary(null);

        try {
            const result = await summarizeTechnicianReviews({ reviews });
            if (result.summary) {
                setSummary(result.summary);
            } else {
                setError("The AI could not generate a summary. Please try again.");
            }
        } catch (e) {
            console.error(e);
            setError("An unexpected error occurred while generating the summary.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="space-y-4">
             <Textarea
                placeholder="Paste reviews here..."
                value={reviews}
                onChange={(e) => setReviews(e.target.value)}
                rows={8}
            />
            <Button onClick={handleSummarize} disabled={isLoading || !reviews.trim()}>
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                    </>
                ) : (
                    <>
                        <Wand2 className="mr-2 h-4 w-4" />
                        Generate Summary
                    </>
                )}
            </Button>
            
            {error && (
                <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            {summary && (
                <Card className="bg-secondary/50">
                    <CardContent className="pt-6">
                        <p className="whitespace-pre-wrap">{summary}</p>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
