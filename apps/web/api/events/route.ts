import {NextResponse} from 'next/server';
import {supabaseAdmin} from '@/lib/supabase/admin';

export async function GET() {
    const { data, error } = await supabaseAdmin
        .from('event')
        .select('*');

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
}

export async function POST(req: Request) {
    const body = await req.json();
    
    const insertRow = {
        title: body.title,
        description: body.description ?? '',
        location: body.location ?? '',
        start_at: body.start_at ?? '',
        end_at: body.end_at ?? '',
        all_day: body.all_day ?? false,
        created_by_user: body.created_by_user ?? '',
    }

    const {data, error} = await supabaseAdmin
        .from('event')
        .insert(insertRow);
        if (error) {
            return NextResponse.json({ error: error.message }, {status: 500});
        } else {
            return NextResponse.json({message: 'Event created successfully', event: data}, {status: 201});
        }
}