interface Req {
    sum: number;
    from: number;
    to: number;
}

interface Res {
    status: "success" | 'failed',
    data: DataErr| DataSuccses
}

interface DataErr {
    errorMessage: string,
    errorCode: 4
}

interface DataSuccses extends Req {
    databaseId: number;
}

const obj: Res = {
    'status': 'success',
    'data': {
        'databaseId': 567,
        "sum": 10000,
        'from': 2,
        'to': 4
    }
}

const obj1: Res = {
	"status": "failed",
	"data": {
		"errorMessage": "Недостаточно средств",
		"errorCode": 4
	}
} 