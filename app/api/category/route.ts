import {dbClient} from "@/lib/db"

export async function GET(request: Request) {

	try {
		const client = await dbClient()
		const result = await client.query('select id,name from product_category')	
		
		return Response.json({rows: result.rows, status: 200})
	} catch(err) {
		console.log(err)
		return Response.json({status: 500})
	}
}
