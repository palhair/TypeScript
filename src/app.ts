type User = {
    name: string,
    age?: number;
    email: string;
}

type partial = Partial<User>

const p: partial = {};

type required = Required<User>;
type requiredAndReadonly = Readonly<required>;
type requiredAndReadonly2 = Required<Readonly<required>>;


//omit pick extract exlude

interface IPaymentPersistent {
    id: number;
    sum: number;
    from: string;
    to: string;
}

type Payment = Omit<IPaymentPersistent, 'id' >;
type Paymetrequests = Pick<IPaymentPersistent, 'from' | 'to'>;


type ExtractEx = Extract<"fdd"| "dffs"| Payment, string>;
type ExcludeEx = Exclude<"fdd"| "dffs"| Payment, string>;

