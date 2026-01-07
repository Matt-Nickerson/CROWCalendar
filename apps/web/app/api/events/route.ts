import {NextResponse} from 'next/server';
import {supabaseAdmin} from '@/lib/supabase/admin';


// GET /api/events
export async function GET() {
    const { data, error } = await supabaseAdmin
        .from('event')
        .select('*');

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data);
}

// POST /api/events
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

// PUT /api/events
export async function PUT(req: Request) {
    const body = await req.json();
    const eventId = body.id;
    if (!eventId) {
        return NextResponse.json({error: 'Event ID is not found'}, {status: 400});
    }
    const updateRow = {
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
        .update(updateRow)
        .eq('id', eventId);
        if (error) {
            return NextResponse.json({ error: error.message }, {status: 500});
        } else {
            return NextResponse.json({message: 'Event updated successfully', event: data}, {status: 200});
        }
}

// DELETE /api/events
export async function DELETE(req: Request) {
    const body = await req.json();
    const eventId = body.id;
    
    if (!eventId) {
        return NextResponse.json({error: 'Event ID is not found'}, {status: 400});
    }
    const {data, error} = await supabaseAdmin
        .from('event')
        .delete()
        .eq('id', eventId);
        if (error) {
            return NextResponse.json({ error: error.message }, {status: 500});
        } else {
            return NextResponse.json({message: 'Event deleted successfully', event: data}, {status: 200});
        }
}