const byte = function (num) {
    if (!num || Math.abs(num) < 128) {
        return num;
    } else if (Math.abs(num) === 128) {
        return -128;
    } else {
        return num > 0 ? byte(num % 128 - 128) : byte(num % 128 + 128);
    }
}

class Bytes {
    constructor() {
        let _this = this;
        this.Array = [];
        return new Proxy(_this, {
            get(target, index) {
                if (index in target) {
                    return target[index];
                } else {
                    return target.Array[index];
                }
            },
            set(target, index, val) {
                target.Array[index] = byte(val);
            }
        })
    }

    alloc(size, val) {
        this.Array.length = size;
        this.Array.fill(val || 0);
    }

    fill(val) {
        this.Array.fill(val || 0);
    }
}

const alloc = function (size, val) {
    let b = new Bytes();
    b.alloc(size, val);
    return b;
}

const from = function (input) {
    let buff = Buffer.from(input);
    let b = alloc(buff.length);
    for (let i = 0; i < buff.length; i++) {
        b[i] = buff.readInt8(i);
    }
    return b;
}

module.exports = {
    alloc,
    from
}
