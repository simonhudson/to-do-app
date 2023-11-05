export interface Item {
	_id: string;
	name: string;
	is_complete: boolean;
	categories?: string[];
	foo?: string[];
}
